export type RpcErrorCode =
  | 'BAD_REQUEST'
  | 'VALIDATION_ERROR'
  | 'NOT_FOUND'
  | 'UNAUTHORIZED'
  | 'FORBIDDEN'
  | 'INTERNAL';

export type RpcErrorPayload = {
  code: RpcErrorCode;
  message: DOMStringList;
  details?: any;
};
