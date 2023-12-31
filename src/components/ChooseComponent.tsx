import {Box, Breadcrumbs, Button, Card, Container, createStyles, Group, Image, Text} from '@mantine/core';
import {IProduct} from "@/utils/globalTypes";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({
   card: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
   },

   title: {
      fontWeight: 700,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      lineHeight: 1.2,
   },

   body: {
      padding: theme.spacing.md,
   },
}));

interface IProps {
   components: IProduct[],
   category: string
}

type ComponentObject = {
   [key: string]: string;
};

const ChooseComponent = ({components, category}: IProps) => {
   const {classes} = useStyles();
   const router = useRouter();

   const items = [
      {title: 'PC Builder', href: '/tool/pc-builder'},
      {title: `Choose ${category}`, href: `/tool/pc-builder/choose?component=${category}`},
   ].map((item, index) => (
      <Link className='breadcrumb-link' href={item.href} key={index} style={{textTransform: 'capitalize'}}>
         {item.title}
      </Link>
   ));

   const addToBuilderHandler = (item: IProduct) => {
      const existingComponents = Cookies.get('components');
      let componentsArray = [];
      if (existingComponents) {
         componentsArray = JSON.parse(existingComponents);
      }
      const newItem:ComponentObject = {};
      newItem[category] = item.name;
      componentsArray.push(newItem)
      Cookies.set('components', JSON.stringify(componentsArray), {
         expires: 2,
         path: '/',
      });
      router.replace('/tool/pc-builder');
   }

   return (
      <Container size="sm" py='2.5rem'>
         <Box>
            <Breadcrumbs separator="→" mb='1rem'>{items}</Breadcrumbs>
         </Box>
         {
            components.length &&
            components.map((item) => (
               <Card radius="md" className={classes.card} key={item._id}>
                  <Group noWrap spacing='lg'>
                     <Image src={item.image} height={140} width={140}/>
                     <div className={classes.body}>
                        <Text transform="uppercase" color="dimmed" weight={700} size="xs">
                           {item.category}
                        </Text>
                        <Text className={classes.title} mt="xs" mb="md">
                           {item.name}
                        </Text>
                        <Group noWrap spacing="xs">
                           <Group spacing="xs" noWrap>
                              <Text size="xs">{item.price}</Text>
                           </Group>
                           <Text size="xs" color="dimmed">
                              {item.status}
                           </Text>
                           <Text size="xs" color="dimmed">
                              {item.rating}
                           </Text>
                        </Group>

                     </div>
                     <Button onClick={() => addToBuilderHandler(item)} className="button-color" size='xs'
                             radius='xl'>Add</Button>
                  </Group>
               </Card>
            ))
         }
      </Container>
   );
};

export default ChooseComponent;