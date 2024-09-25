import { Test, TestingModule } from '@nestjs/testing';
import { DataLoadersService } from './data-loaders.service';

describe('DataLoadersService', () => {
  let service: DataLoadersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataLoadersService],
    }).compile();

    service = module.get<DataLoadersService>(DataLoadersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
