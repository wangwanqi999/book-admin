import service from './index'
export const getPersonInfo = () => {
  const url = '/visualapi'
  return service.get(url)
}
