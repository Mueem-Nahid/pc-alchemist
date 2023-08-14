import {Avatar, Button, Container, Group, ScrollArea, Table, Text} from '@mantine/core';
import {ICategory} from "@/utils/globalTypes";
import Link from "next/link";
import {IconTrashX} from "@tabler/icons-react";
import Cookies from "js-cookie";
import {Dispatch, SetStateAction} from "react";

interface IPCBuilderProps {
   categories: ICategory[];
   selectedComponents: { [key: string]: string }[];
   setSelectedComponents: Dispatch<SetStateAction<{ [key: string]: string }[]>>;
}

export function PCBuilder({categories, selectedComponents, setSelectedComponents}: IPCBuilderProps) {

   const handleDeleteComponent = (item: ICategory) => {
      const existingComponents = Cookies.get('components');
      let componentsArray: { [key: string]: string }[] = [];
      if (existingComponents) {
         componentsArray = JSON.parse(existingComponents);
      }
      // Find the index of the object you want to delete
      const indexToDelete = componentsArray.findIndex((component) => component[item.link]);
      if (indexToDelete !== -1) {
         // Remove the object from the array
         componentsArray.splice(indexToDelete, 1);
         // Update the cookies with the modified array
         Cookies.set('components', JSON.stringify(componentsArray), {
            expires: 2,
            path: '/',
         });
         setSelectedComponents(componentsArray);
      }
   }

   const rows = categories.map((item: ICategory) => {
      const matchingComponent = selectedComponents.find((component) => component[item.link]);
      const componentValue = matchingComponent ? matchingComponent[item.link] : '';

      return (
         <tr key={item.name}>
            <td>
               <Group spacing="sm">
                  <Avatar size={40} radius={40}>{item.name.substring(0, 1)}</Avatar>
                  <div>
                     <Text fz="sm" fw={500}>
                        {item.name}
                     </Text>
                     {
                        componentValue &&
                         <Group noWrap>
                             <Text fz='sm'>{componentValue.slice(0, 40)} ...</Text>
                             <IconTrashX size={18} color='red' onClick={() => handleDeleteComponent(item)}/>
                         </Group>
                     }
                  </div>
               </Group>
            </td>
            <td>
               <Link href={!componentValue ? `/tool/pc-builder/choose?component=${item.link}` : ''} className='link'>
                  <Button className='button-color' radius='lg' size='xs'
                          disabled={componentValue ? true : false}>Choose</Button>
               </Link>
            </td>
         </tr>
      )
   });

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