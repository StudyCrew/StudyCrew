import _isError from 'lodash/isError'

const { NODE_ENV } = process.env

export const getErrorMessageForEnv = (err: Error | string): string => {
  if (_isError(err)) {
    return NODE_ENV === 'development' ? err.stack ?? err.message : err.message
  }

  return err
}
