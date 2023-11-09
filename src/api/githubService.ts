import axios from 'axios';

const baseURLEric = 'https://api.github.com/users/kunzeleric'
const baseURLLucas = 'https://api.github.com/users/osmaclean'

export const handlerGithubServiceEric = async () => {
  const response = await axios({
    method: 'GET',
    url: baseURLEric,
  })

  return response.data
}

export const handlerGithubServiceLucas = async () => {
  const response = await axios({
    method: 'GET',
    url: baseURLLucas,
  })

  return response.data
}

