import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDonor, loadDonors, updateDonor } from '../features/donors/donorsSlice'

const bloodTypes = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-']

function DonorDetails() {
  const dispatch = useDispatch()
  const { items: donors, status } = useSelector((state) => state.donors)
  const [editingDonor, setEditingDonor] = useState(null)
  const [deletingDonor, setDeletingDonor] = useState(null)

  useEffect(() => {
    dispatch(loadDonors())
  }, [dispatch])

  const handleDelete = (id, fullName) => {
    setDeletingDonor({ id, fullName })
  }

  const confirmDelete = () => {
    dispatch(deleteDonor(deletingDonor.id))
    setDeletingDonor(null)
  }

  return (
    <>
      {status === 'loading' ? <div className="loading-state">Loading your donor network...</div> : <div className="donor-table"><div className="table-head"><span>Donor</span><span>Blood type</span><span>Location</span><span>Last donation</span><span>Status</span><span>Actions</span></div>{donors.map((donor) => <div className="table-row" key={donor.id}><div className="donor-name"><div className="mini-avatar">{donor.fullName.split(' ').map((part) => part[0]).join('')}</div><strong>{donor.fullName}</strong></div><span className="blood-type">{donor.bloodType}</span><span>{donor.city}</span><span>{new Date(donor.lastDonation).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</span><span className={donor.available ? 'status available' : 'status unavailable'}><i />{donor.available ? 'Available' : 'Resting'}</span><div className="row-actions"><button type="button" onClick={() => setEditingDonor(donor)}>Edit</button><button type="button" className="delete-action" onClick={() => handleDelete(donor.id, donor.fullName)}>Delete</button></div></div>)}</div>}
      {editingDonor && <EditDonorModal donor={editingDonor} onClose={() => setEditingDonor(null)} />}
      {deletingDonor && <div className="modal-backdrop" onClick={() => setDeletingDonor(null)}><div className="confirmation-slide" role="alertdialog" aria-modal="true" aria-labelledby="delete-title" onClick={(event) => event.stopPropagation()}><div className="confirmation-icon">!</div><p className="eyebrow">Remove donor</p><h2 id="delete-title">Delete {deletingDonor.fullName}?</h2><p className="modal-copy">This donor will be removed from your directory. This action cannot be undone.</p><div className="confirmation-actions"><button type="button" className="cancel-button" onClick={() => setDeletingDonor(null)}>Cancel</button><button type="button" className="confirm-delete-button" onClick={confirmDelete}>Delete donor</button></div></div></div>}
    </>
  )
}

function EditDonorModal({ donor, onClose }) {
  const dispatch = useDispatch()
  const [form, setForm] = useState(donor)
  const updateField = (field, value) => setForm({ ...form, [field]: value })
  const submit = (event) => {
    event.preventDefault()
    dispatch(updateDonor(donor.id, { ...form, age: Number(form.age) }))
    onClose()
  }

  return <div className="modal-backdrop" onClick={onClose}><form className="modal" onSubmit={submit} onClick={(event) => event.stopPropagation()}><button type="button" className="close-button" onClick={onClose}>×</button><p className="eyebrow">Donor directory</p><h2>Update donor</h2><p className="modal-copy">Keep this donor's contact details current.</p><DonorFields form={form} updateField={updateField} /><button className="submit-button" type="submit">Save changes <span>→</span></button></form></div>
}

export function DonorFields({ form, updateField }) {
  return <><label>Full name<input required value={form.fullName} onChange={(event) => updateField('fullName', event.target.value)} placeholder="Full name" /></label><div className="form-row"><label>Mobile<input required type="tel" value={form.mobile} onChange={(event) => updateField('mobile', event.target.value)} placeholder="Mobile number" /></label><label>Email<input required type="email" value={form.email} onChange={(event) => updateField('email', event.target.value)} placeholder="Email address" /></label></div><div className="form-row"><label>Age<input required min="18" max="65" type="number" value={form.age} onChange={(event) => updateField('age', event.target.value)} placeholder="Age" /></label><label>Blood type<select value={form.bloodType} onChange={(event) => updateField('bloodType', event.target.value)}>{bloodTypes.map((type) => <option key={type}>{type}</option>)}</select></label></div><label>City<input required value={form.city} onChange={(event) => updateField('city', event.target.value)} placeholder="City" /></label></>
}

export default DonorDetails
