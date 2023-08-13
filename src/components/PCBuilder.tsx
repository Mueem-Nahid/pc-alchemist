import {Avatar, Button, Container, Group, ScrollArea, Table, Text} from '@mantine/core';
import {ICategory} from "@/utils/globalTypes";
import Link from "next/link";

interface IPCBuilderProps {
   categories: ICategory[]
}

export function PCBuilder({categories}: IPCBuilderProps) {
   const rows = categories.map((item) => (
      <tr key={item.name}>
         <td>
            <Group spacing="sm">
               <Avatar size={40} radius={40}>{item.name.substring(0, 1)}</Avatar>
               <div>
                  <Text fz="sm" fw={500}>
                     {item.name}
                  </Text>
               </div>
            </Group>
         </td>
         <td>
            <Link href={`/tool/pc-builder/choose?component=${item.link}`} className='link'>
               <Button className='button-color' radius='lg' size='xs'>Choose</Button>
            </Link>
         </td>
      </tr>
   ));

   return (
      <Container size="sm" py='2.5rem'>
         <ScrollArea>
            <Table verticalSpacing="sm">
               <thead>
               <tr>
                  <th colSpan={2}><Text fw='bolder' fz='md'>PC Components</Text></th>
               </tr>
               </thead>
               <tbody>{rows}</tbody>
            </Table>
         </ScrollArea>
      </Container>
   );
}