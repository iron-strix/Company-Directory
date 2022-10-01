/*
import { ref } from 'vue'
import router from '@/router'

const dbUsers = [
  {
    username: 'admin',
    password: 'admin',
    name: 'admin',
    role: 'admin',
    email: 'admin@coolcompany.com',
  },
  {
    username: 'user',
    password: 'user',
    name: 'user',
    role: 'user',
    email: 'user@coolcompany.com',
  },
]

const isAuthenticated = ref(false)
const user = ref({})

export const useAuth = () => {
  const login = (username, password) => {
    const dbUser = dbUsers.find((u) => u.username === username && u.password === password)
    if (dbUser) {
      const { name, role, email, username } = dbUser
      isAuthenticated.value = true
      user.value = { name, role, email, username }
      return true
    }
    return false
  }

  const logout = () => {
    isAuthenticated.value = false
    user.value = {}
    router.push({ name: 'home' })
  }
  return { isAuthenticated, user, login, logout }
}
*/

import router from '@/router'
import { firebaseApp } from '@/composables/useFirebase'

import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useAuth as firebaseAuth } from '@vueuse/firebase/useAuth'

const auth = getAuth(firebaseApp)

const { isAuthenticated, user } = firebaseAuth(auth)

export const useAuth = () => {
  const login = async (username, password) => {
    await signInWithEmailAndPassword(auth, username, password)
    return isAuthenticated.value
  }

  const logout = async () => {
    await signOut(auth)
    router.push({ name: 'home' })
  }
  return { isAuthenticated, user, login, logout }
}
