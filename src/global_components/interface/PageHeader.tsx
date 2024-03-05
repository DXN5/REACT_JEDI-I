import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';

interface Props {
  url: string;
  name: string;
}

const PageHeader: FC<Props> = ({url, name}) => {
  return (<>
        <Box className="CommentsTopBox">
        <NavLink className="NavBackComments" to={url}>
          <KeyboardBackspaceRoundedIcon className="BackIconComments" fontSize="large" />
        </NavLink>
        <Typography className="CommentsTopHeader">{name}</Typography>
      </Box>
  </>)
}

export default PageHeader