import { Prisma } from '@prisma/client';
import { CreateGroupDto } from 'src/groups/dto/create-group.dto';
import { Group } from 'src/groups/entities/group.entity';

export const mapCreateGroupDtoToGroupCreateInput = (
  dto: Group,
): Prisma.GroupCreateInput => {
  const { name, user } = dto;
  return {
    name,
    user: {
      connect: {
        id: user.id,
      },
    },
  };
};
