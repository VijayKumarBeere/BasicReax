import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDonor } from './features/donors/donorsSlice'
import DonorDetails, { DonorFields } from './components/DonorDetails'
import './App.css'

const navItems = ['Overview', 'Donor directory', 'Requests', 'Locations']
const emptyForm = { fullName: '', mobile: '', email: '', age: '', bloodType: 'O+', city: '' }

function App() {
  const dispatch = useDispatch()
  const { items: donors, status } = useSelector((state) => state.donors)
  const [activeNav, setActiveNav] = useState('Overview')
  const [isModalOpen, setModalOpen] = useState(false)
  const [form, setForm] = useState(emptyForm)

  const availableDonors = donors.filter((donor) => donor.available).length
  const submitDonor = (event) => {
    event.preventDefault()
    dispatch(addDonor({ ...form, age: Number(form.age), available: true, lastDonation: new Date().toISOString().slice(0, 10) }))
    setForm(emptyForm)
    setModalOpen(false)
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">+</span><span>lifeline</span></div>
        <div className="workspace-label">Your workspace</div>
        <nav>
          {navItems.map((item, index) => (
            <button className={activeNav === item ? 'nav-item active' : 'nav-item'} key={item} onClick={() => setActiveNav(item)}>
              <span className="nav-icon">{['◌', '♢', '▣', '⌖'][index]}</span>{item}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="help-card"><span className="spark">✦</span><strong>Need a hand?</strong><p>Our care team is here for you.</p><button>Contact support <span>↗</span></button></div>
          <div className="profile"><div className="avatar">AK</div><div><strong>Ananya Kapoor</strong><small>Administrator</small></div><span className="more">•••</span></div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar"><div className="breadcrumb">Workspace <span>/</span> <strong>{activeNav}</strong></div><div className="top-actions"><button className="icon-button" aria-label="Notifications">♧<i /></button><button className="outline-button" onClick={() => setModalOpen(true)}><span>+</span> Add donor</button></div></header>
        <section className="content">
          <div className="intro"><div><p className="eyebrow">Thursday, 27 August 2026</p><h1>Good morning, Ananya <span>✦</span></h1><p className="subtitle">Every donation is a quiet act of courage. Here is what is happening today.</p></div><div className="sync-status"><span className={status === 'loading' ? 'pulse' : ''} /> {status === 'loading' ? 'Syncing directory' : 'Directory up to date'}</div></div>
          <div className="stats-grid"><Stat label="Active donors" value={availableDonors || '—'} detail="ready to help" trend="+12.4%" /><Stat label="Open requests" value="18" detail="across 6 cities" trend="+3 today" warning /><Stat label="Lives supported" value="2,846" detail="this year" trend="+18.7%" /></div>
          <div className="section-heading"><div><p className="eyebrow">People making a difference</p><h2>Donor directory</h2></div><button className="text-button" onClick={() => setActiveNav('Donor directory')}>View all <span>→</span></button></div>
          <DonorDetails />
          <div className="bottom-grid"><div className="quote-panel"><div className="quote-mark">“</div><p>One donation can save up to three lives. Thank you for helping care travel further.</p><span>— The LifeLine team</span></div><div className="quick-panel"><div><p className="eyebrow">Quick action</p><h3>Help someone today</h3><p>Create a request and reach nearby donors.</p></div><button onClick={() => setModalOpen(true)}>Create request <span>→</span></button></div></div>
        </section>
      </main>

      {isModalOpen && <div className="modal-backdrop" onClick={() => setModalOpen(false)}><form className="modal" onSubmit={submitDonor} onClick={(event) => event.stopPropagation()}><button type="button" className="close-button" onClick={() => setModalOpen(false)}>×</button><p className="eyebrow">Grow the network</p><h2>Add a donor</h2><p className="modal-copy">Add a trusted donor to your local directory.</p><DonorFields form={form} updateField={(field, value) => setForm({ ...form, [field]: value })} /><button className="submit-button" type="submit">Add to directory <span>→</span></button></form></div>}
    </div>
  )
}

function Stat({ label, value, detail, trend, warning }) { return <div className="stat-card"><div className="stat-top"><span>{label}</span><span className={warning ? 'trend warning' : 'trend'}>{trend}</span></div><div className="stat-value">{value}</div><div className="stat-detail">{detail}</div></div> }

export default App
