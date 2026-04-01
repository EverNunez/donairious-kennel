import { supabase } from '../lib/supabase'

const BUCKET = 'dog-photos'
const TABLE  = 'dogs'

export async function getDogs() {
  const { data, error } = await supabase.from(TABLE).select('*').eq('visible', true).order('created_at', { ascending: false })
  if (error) throw error
  return data
}

export async function getAllDogs() {
  const { data, error } = await supabase.from(TABLE).select('*').order('created_at', { ascending: false })
  if (error) throw error
  return data
}

export async function createDog({ nombre, raza, color, descripcion, estado, imageFile }) {
  let foto_url = null
  if (imageFile) {
    const ext = imageFile.name.split('.').pop()
    const filename = `${Date.now()}.${ext}`
    const { error: uploadError } = await supabase.storage.from(BUCKET).upload(filename, imageFile)
    if (uploadError) throw uploadError
    const { data: urlData } = supabase.storage.from(BUCKET).getPublicUrl(filename)
    foto_url = urlData.publicUrl
  }
  const { data, error } = await supabase.from(TABLE).insert([{ nombre, raza, color, descripcion, estado, foto_url, visible: true }]).select().single()
  if (error) throw error
  return data
}

export async function updateDog(id, updates, newImageFile = null) {
  let foto_url = updates.foto_url
  if (newImageFile) {
    const ext = newImageFile.name.split('.').pop()
    const filename = `${Date.now()}.${ext}`
    const { error: uploadError } = await supabase.storage.from(BUCKET).upload(filename, newImageFile)
    if (uploadError) throw uploadError
    const { data: urlData } = supabase.storage.from(BUCKET).getPublicUrl(filename)
    foto_url = urlData.publicUrl
  }
  const { data, error } = await supabase.from(TABLE).update({ ...updates, foto_url }).eq('id', id).select().single()
  if (error) throw error
  return data
}

export async function deleteDog(id, foto_url) {
  if (foto_url) {
    const parts = foto_url.split(`/${BUCKET}/`)
    if (parts[1]) await supabase.storage.from(BUCKET).remove([parts[1]])
  }
  const { error } = await supabase.from(TABLE).delete().eq('id', id)
  if (error) throw error
}

export async function toggleVisibility(id, visible) {
  const { data, error } = await supabase.from(TABLE).update({ visible: !visible }).eq('id', id).select().single()
  if (error) throw error
  return data
}