/**
 *
 * @param {Context} ctx Context.
 * @param {number} errorCode Error code.
 * @param {string} message Error message.
 */
const handleError = (ctx, errorCode, message) => {
  ctx.log.error(`Server error: ${message} url: ${ctx.request.url}`, ctx.request.body, ctx.req.headers);
  ctx.body = {
    status: 'failure',
    data: {
      code: errorCode,
      message,
    },
  };
};

const handleInternalError = (ctx) => handleError(ctx, 500, 'Internal server error.');

module.exports = {
  handleError,
  handleInternalError,
};
