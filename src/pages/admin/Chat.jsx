import { Box } from '@mui/material'
import React from 'react'
import TopHeader from '../../components/AdminLayout/TopHeader'
import CommonChat from '../../components/shared/CommonChat'

export default function AdminChat() {
  return (
    <Box>
        <TopHeader logo />
    <CommonChat />
    </Box>
  )
}
