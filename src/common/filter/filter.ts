// import { Catch, ExceptionFilter } from '@nestjs/common';
// import { HttpException } from '@nestjs/core';

// @Catch(HttpException, Error)
// export class HttpExceptionFilter implements ExceptionFilter {
//   public catch(err, res) {
//     const status = err.getStatus() || 500;
//     const message = err.message || 'Internal error';

//     return res.status(status).json({ message, status });
//   }
// }
