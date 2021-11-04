import React from "react";

import Loader from 'react-loader-spinner'

import { List, ListItem, LoaderContainer } from "./styles";
import { Link } from "react-router-dom";
import api from "../../utils/api";

export const AdminList = ({ selected }) => {
  const [loading, setLoading] = React.useState(false)
  const [data, setData] = React.useState([])

  const getData = () => {
    setLoading(true)
    api
      .get(`/${selected}/all/`)
      .then(res => {
        const data = res.data
        setData(res.data)
        setLoading(false)
      })
  }

  React.useEffect(() => {
    getData()
  }, [selected])

  if (loading) {
    return (
      <LoaderContainer>
        <Loader
          type={'TailSpin'}
          color={'#000000'}
          height={100}
          width={100}
        />
      </LoaderContainer>
    )
  }

  return (
    <List>
      {data.map(item => (
        <ListItem
          key={item.id}
          as={Link}
          to={`/admin/${selected}/${item.id}`}
        >
          {item.name || item.question || item.email}
        </ListItem>
      ))}
    </List>
  )
}