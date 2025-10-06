import React, { useEffect, useState, useCallback } from 'react'
import { api } from '../../api/client'
import '../../styles/MyServiceOrders/ServiceOrdersTable.css'

const ServiceOrdersTable = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [paying, setPaying] = useState({}) // { [orderId]: true }
  const [payErrors, setPayErrors] = useState({}) // almacenar errores específicos de pago

  useEffect(() => {
    const controller = new AbortController()
    async function load() {
      setLoading(true)
      setError(null)
      try {
        const qs = new URLSearchParams({ user_id: 1 }).toString()
        const data = await api.get(`/api/services-management/orders?${qs}`, { signal: controller.signal })
        const list = Array.isArray(data) ? data : (data ? [data] : [])
        setOrders(list)
      } catch (e) {
        if (e.name !== 'AbortError') {
          setError(e.message || 'Error al cargar órdenes')
        }
      } finally {
        setLoading(false)
      }
    }
    load()
    return () => controller.abort()
  }, [])

  function formatDateTime(iso) {
    if (!iso) return '—'
    const d = new Date(iso)
    if (isNaN(d)) return '—'
    return d.toLocaleString('es-CO', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  function getPaidBadge(isPaid) {
    return isPaid
      ? <span className="status-badge status-completed">Pagado</span>
      : <span className="status-badge status-scheduled">Pendiente</span>
  }

  const handlePay = useCallback(async (order) => {
    const id = order.id_order
    if (!id || paying[id]) return
    console.log('>>> [pay-order] Iniciando pago de la orden #', id)
    const payload = {
      order_id: id,
      amount: 20000,
      method: 'DAVIPLATA',
      user_name: 'Sergio'
    }
    console.log('>>> [pay-order] Payload a enviar:', payload)
    setPayErrors(prev => ({ ...prev, [id]: undefined }))
    setPaying(prev => ({ ...prev, [id]: true }))
    try {
      const base = (import.meta.env.VITE_SERVICES_MS_URL || '').replace(/\/+$/, '')
      if (!base) throw new Error('VITE_SERVICE_MS_URL no está definida')
      const url = base + '/api/services-management/payment/pay-order'
      console.log('>>> [pay-order] POST', url)
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) {
        let details
        try { details = await res.json() } catch { details = { message: res.statusText } }
        throw new Error(`HTTP ${res.status}: ${details.message || 'Error'}`)
      }
      const ct = res.headers.get('content-type') || ''
      let data
      if (ct.includes('application/json')) { try { data = await res.json() } catch { data = null } } else { data = await res.text() }
      console.log('>>> [pay-order] Respuesta recibida:', data)
      setOrders(prev => prev.map(o => o.id_order === id ? { ...o, is_paid: true } : o))
    } catch (e) {
      console.log('>>> [pay-order] Error en pago orden #', id, e)
      let msg = e.message || 'Error al pagar'
      if (/Failed to fetch/i.test(msg)) msg = 'No se pudo conectar al servidor (CORS o red).'
      setPayErrors(prev => ({ ...prev, [id]: msg }))
    } finally {
      setPaying(prev => ({ ...prev, [id]: false }))
      console.log('>>> [pay-order] Finalizó intento de pago orden #', id)
    }
  }, [paying])

  if (loading) {
    return (
      <div className="table-container">
        <header className="table-header">
          <h1 className="table-title">Mis Órdenes</h1>
        </header>
        <div className="table-wrapper">
          <p style={{ padding: 16 }}>Cargando órdenes...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="table-container">
        <header className="table-header">
          <h1 className="table-title">Mis Órdenes</h1>
        </header>
        <div className="table-wrapper">
          <p style={{ padding: 16, color: '#b91c1c' }}>{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="table-container">
      <header className="table-header">
        <h1 className="table-title">Mis Órdenes (Usuario #1)</h1>
        <div className="table-actions">
          <div className="search-container">
            <svg className="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M7.333 12.667a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667Z" stroke="#9CA3AF" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              type="text"
              placeholder="(Búsqueda no implementada)"
              className="search-input"
              disabled
            />
          </div>
        </div>
      </header>

      <div className="table-wrapper">
        <table className="orders-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Servicio</th>
              <th>Trabajador</th>
              <th>Inicio</th>
              <th>Fin</th>
              <th>Monto</th>
              <th>Pago</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 && (
              <tr>
                <td colSpan={7} style={{ textAlign: 'center', padding: 16 }}>Sin órdenes</td>
              </tr>
            )}
            {orders.map(o => {
              const unpaid = !o.is_paid
              const isPaying = !!paying[o.id_order]
              const payError = payErrors[o.id_order]
              return (
                <tr key={o.id_order}>
                  <td className="order-id">#{o.id_order}</td>
                  <td>{o.service_name || '—'}</td>
                  <td className="worker-cell">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      {o.worker_photo && (
                        <img
                          src={o.worker_photo}
                          alt={o.worker_name}
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            objectFit: 'cover',
                            flexShrink: 0
                          }}
                          loading="lazy"
                        />
                      )}
                      <span>{o.worker_name || '—'}</span>
                    </div>
                  </td>
                  <td>{formatDateTime(o.service_date_begin)}</td>
                  <td>{formatDateTime(o.service_date_finish)}</td>
                  <td>
                    ${Number(o.amount ?? 0).toLocaleString('es-CO', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}
                  </td>
                  <td className="order-status" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {getPaidBadge(o.is_paid)}
                    {unpaid && (
                      <>
                        <button
                          type="button"
                          className={`pay-btn ${isPaying ? 'loading' : ''}`}
                          onClick={() => handlePay(o)}
                          disabled={isPaying}
                        >
                          {isPaying ? (
                            <>
                              <span className="spinner" />
                              Pagando...
                            </>
                          ) : 'Pagar'}
                        </button>
                        {payError && (
                          <span style={{ color: '#b91c1c', fontSize: 11 }}>{payError}</span>
                        )}
                      </>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <footer className="table-footer">
        <span className="results-count">
          Mostrando {orders.length} orden{orders.length !== 1 ? 'es' : ''}
        </span>
      </footer>
    </div>
  )
}

export default ServiceOrdersTable