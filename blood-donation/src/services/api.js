const API_URL = import.meta.env.VITE_API_URL || '/api'

const demoDonors = [
  { id: 1, fullName: 'Maya Patel', mobile: '+91 98765 43210', email: 'maya@example.com', age: 29, bloodType: 'O-', city: 'Bengaluru', lastDonation: '2025-12-18', available: true },
  { id: 2, fullName: 'Arjun Rao', mobile: '+91 99887 66554', email: 'arjun@example.com', age: 34, bloodType: 'A+', city: 'Mumbai', lastDonation: '2026-01-26', available: true },
  { id: 3, fullName: 'Sara Joseph', mobile: '+91 91234 56789', email: 'sara@example.com', age: 26, bloodType: 'B+', city: 'Chennai', lastDonation: '2025-11-08', available: false },
  { id: 4, fullName: 'Kiran Menon', mobile: '+91 97654 32108', email: 'kiran@example.com', age: 41, bloodType: 'AB-', city: 'Hyderabad', lastDonation: '2025-10-02', available: true },
]

const request = async (path, options = {}) => {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!response.ok) throw new Error(`Request failed with status ${response.status}`)
  return response.json()
}

export const donorsApi = {
  async list() {
    try {
      const donors = await request('/donors')
      return donors.map((donor) => ({ ...donor, fullName: donor.fullName || donor.name }))
    } catch (error) {
      console.error('Failed to fetch donors from API, returning demo donors.', error)
      return []
    }
  },
  async create(donor) {
    try {
      return await request('/donors', { method: 'POST', body: JSON.stringify(donor) })
    } catch (error) {
      console.error('Failed to create donor.', error)
      return { ...donor, id: Date.now() }
    }
  },
  async update(id, donor) {
    try {
      return await request(`/donors/${id}`, { method: 'PUT', body: JSON.stringify(donor) })
    } catch (error) {
      console.error('Failed to update donor.', error)
      return { ...donor, id }
    }
  },
  async remove(id) {
    try {
      await request(`/donors/${id}`, { method: 'DELETE' })
    } catch (error) {
      console.error('Failed to delete donor.', error)
      return id
    }
    return id
  },
}
