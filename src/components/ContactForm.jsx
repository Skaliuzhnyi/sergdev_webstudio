import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const FORMSPREE_ID = 'YOUR_FORM_ID'

export default function ContactForm() {
  const { t } = useTranslation()
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    if (FORMSPREE_ID === 'YOUR_FORM_ID') {
      await new Promise(r => setTimeout(r, 1200))
      setStatus('ok')
      setTimeout(() => { setStatus('idle'); setForm({ name:'', email:'', subject:'', message:'' }) }, 4000)
      return
    }
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, { method:'POST', body:JSON.stringify(form), headers:{ 'Content-Type':'application/json', Accept:'application/json' } })
      if (res.ok) { setStatus('ok'); setForm({ name:'', email:'', subject:'', message:'' }); setTimeout(() => setStatus('idle'), 5000) }
      else throw new Error()
    } catch { setStatus('err'); setTimeout(() => setStatus('idle'), 4000) }
  }

  const inp = {
    background:'var(--bg2)', border:'1px solid var(--border)', borderRadius:'var(--r)',
    padding:'.8rem 1rem', color:'var(--text)', fontFamily:'var(--fb)', fontSize:'.9375rem',
    transition:'border-color .2s, background .2s', width:'100%', outline:'none',
  }
  const bgMap = { idle:'var(--accent)', sending:'var(--bg3)', ok:'#0d4a2a', err:'#4a0d0d' }
  const lblMap = { idle: t('form.sub'), sending: t('form.sending'), ok: t('form.sent'), err: t('form.err') }
  const clrMap = { idle:'#000', sending:'var(--text2)', ok:'#7dffb8', err:'#ffb8b8' }

  return (
    <form onSubmit={submit} style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'var(--rxl)', padding:'2.5rem' }}>
      <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:'1.25rem', fontWeight:700, marginBottom:'1.5rem', color:'var(--text)' }}>{t('form.title')}</h2>
      {FORMSPREE_ID === 'YOUR_FORM_ID' && (
        <div style={{ background:'var(--bg3)', border:'1px solid var(--border)', borderRadius:'var(--r)', padding:'.75rem 1rem', marginBottom:'1.25rem', fontSize:'.78rem', color:'var(--text2)', display:'flex', gap:'.5rem', lineHeight:1.55 }}>
          ⚙️ <span>Replace <code style={{ background:'var(--bg2)', padding:'1px 5px', borderRadius:4 }}>YOUR_FORM_ID</code> in <b>ContactForm.jsx</b> → <a href="https://formspree.io" target="_blank" style={{ color:'var(--accent)' }}>formspree.io</a></span>
        </div>
      )}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', marginBottom:'1.125rem' }}>
        <div>
          <label style={{ fontSize:'.78rem', fontWeight:600, color:'var(--text2)', display:'block', marginBottom:'.45rem' }}>{t('form.name')}</label>
          <input style={inp} value={form.name} onChange={set('name')} placeholder="John Smith" required
            onFocus={e => e.target.style.borderColor='var(--accent)'} onBlur={e => e.target.style.borderColor='var(--border)'}/>
        </div>
        <div>
          <label style={{ fontSize:'.78rem', fontWeight:600, color:'var(--text2)', display:'block', marginBottom:'.45rem' }}>{t('form.email')}</label>
          <input style={inp} type="email" value={form.email} onChange={set('email')} placeholder="john@company.com" required
            onFocus={e => e.target.style.borderColor='var(--accent)'} onBlur={e => e.target.style.borderColor='var(--border)'}/>
        </div>
      </div>
      <div style={{ marginBottom:'1.125rem' }}>
        <label style={{ fontSize:'.78rem', fontWeight:600, color:'var(--text2)', display:'block', marginBottom:'.45rem' }}>{t('form.subject')}</label>
        <input style={inp} value={form.subject} onChange={set('subject')} placeholder="Новий проект / Consultation"
          onFocus={e => e.target.style.borderColor='var(--accent)'} onBlur={e => e.target.style.borderColor='var(--border)'}/>
      </div>
      <div>
        <label style={{ fontSize:'.78rem', fontWeight:600, color:'var(--text2)', display:'block', marginBottom:'.45rem' }}>{t('form.msg')}</label>
        <textarea style={{ ...inp, minHeight:140, resize:'vertical' }} value={form.message} onChange={set('message')} placeholder="Розкажіть про ваш проект..." required
          onFocus={e => e.target.style.borderColor='var(--accent)'} onBlur={e => e.target.style.borderColor='var(--border)'}/>
      </div>
      <motion.button type="submit" disabled={status==='sending'}
        whileHover={status==='idle' ? { y:-2, boxShadow:'0 8px 24px rgba(var(--accent-rgb),.25)' } : {}}
        style={{ width:'100%', marginTop:'1.375rem', background:bgMap[status], color:clrMap[status], fontSize:'.9375rem', fontWeight:700, padding:14, borderRadius:'var(--r)', display:'flex', alignItems:'center', justifyContent:'center', gap:'.5rem', border:'none', cursor:status==='sending'?'not-allowed':'pointer', transition:'all .25s' }}>
        {lblMap[status]}
        {status==='idle' && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>}
      </motion.button>
      <p style={{ fontSize:'.75rem', color:'var(--text3)', textAlign:'center', marginTop:'.625rem' }}>{t('form.note')}</p>
    </form>
  )
}
