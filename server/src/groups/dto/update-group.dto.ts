import { PartialType } from '@nestjs/swagger';
import { Group } from '../entities/group.entity';

export class UpdateGroupDto extends PartialType(Group) {}
