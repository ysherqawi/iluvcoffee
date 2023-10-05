import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  //HttpCode,
  //HttpStatus,
  //Res,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    //@Res() response
    /*it should be used with care. In general, your approach is much
     less clear and does have some disadvantages.

     Some main disadvantages of this approach, are that you lose compatibility with Nest

     features that depend on Nest standard response handling, such as:.
     Interceptors and the @HttpCode() decorator.
     Also, our code becomes harder to test and our code can become platform dependent
     
     As a best practice it is recommended to use nest standard approach when dealing with responses whenever possible*/
    //response.status(200).send('This action returns all the coffees');
    return 'This action returns all the coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns ${id} coffee`;
  }

  @Post()
  //@HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }
}
