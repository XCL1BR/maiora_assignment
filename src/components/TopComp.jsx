import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { FiSettings } from 'react-icons/fi'

const TopComp = () => {
  return (
    <Card style={{ backgroundColor: '#123456' }}>
      <CardContent style={{ textAlign: 'left' }}>
        <Typography variant="body1" component="div" color="white" textAlign={'center'}>
          Maximum Funding
        </Typography>
        <Typography variant="h4" color="white" textAlign={'center'}>
          Rp 17.484.500
        </Typography>
        <Typography variant="body1" color="white">
          Honda ADV 150 CBS
        </Typography>
        <Typography variant="body1" color="white" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          2022
          <FiSettings style={{ marginLeft: 'auto', color: 'white' }} />
        </Typography>
      </CardContent>
    </Card>
  )
}

export default TopComp