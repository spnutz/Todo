import { Module } from '@nestjs/common';
import { HealthController } from './app.controller';
import { TerminusModule } from '@nestjs/terminus';
import { TodoModule } from './modules/todo/todo.module';

@Module({
  imports: [TerminusModule, TodoModule],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
