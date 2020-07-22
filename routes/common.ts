/**
 *
 * @param {Context} ctx Context.
 * @param {number} errorCode Error code.
 * @param {string} message Error message.
 */
const handleError = (ctx: any, errorCode: number, message: string) => {
  ctx.log.error(`Server error: ${message} url: ${ctx.request.url}`, ctx.request.body, ctx.req.headers);
  ctx.body = {
    status: 'failure',
    data: {
      code: errorCode,
      message,
    },
  };
};

const handleInternalError = (ctx: any) => handleError(ctx, 500, 'Internal server error.');

export default {
  handleError,
  handleInternalError,
};
