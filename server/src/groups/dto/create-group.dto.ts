import { PartialType } from '@nestjs/swagger';
import { Group } from '../entities/group.entity';

export class CreateGroupDto extends PartialType(Group) {}
