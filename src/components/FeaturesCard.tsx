import {Card, Image, Text, Group, Badge, createStyles, Center, Button, rem} from '@mantine/core';
import {IconGasStation, IconGauge, IconManualGearbox, IconUsers} from '@tabler/icons-react';
import Link from "next/link";

const useStyles = createStyles((theme) => ({
   card: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
   },

   imageSection: {
      padding: theme.spacing.md,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: `${rem(1)} solid ${
         theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
   },

   label: {
      marginBottom: theme.spacing.xs,
      lineHeight: 1,
      fontWeight: 700,
      fontSize: theme.fontSizes.xs,
      letterSpacing: rem(-0.25),
      textTransform: 'uppercase',
   },

   section: {
      padding: theme.spacing.md,
      borderTop: `${rem(1)} solid ${
         theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
   },

   icon: {
      marginRight: rem(5),
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
   },
}));

interface IFeaturedProps {
   id: string;
   image: string;
   name: string;
   category: string;
   price: number;
   status: string;
   rating: number
}

export function FeaturesCard({id, name, category, image, price, status, rating}: IFeaturedProps) {
   const {classes} = useStyles();

   return (
      <Card withBorder radius="md" className={classes.card}>
         <Card.Section className={classes.imageSection}>
            <Image src={image} alt={name}/>
         </Card.Section>

         <Group position="apart" mt="md">
            <div>
               <Text fw={500}>{name.slice(0, 20)} ...</Text>
               <Text fz="xs" c="dimmed">
                  {category}
               </Text>
            </div>
            <Badge variant="outline" size='sm'
                   color={`${status === "In Stock" ? 'blue' : 'red'}`}>
               {status}
            </Badge>
         </Group>

         <Card.Section className={classes.section}>
            <Group spacing={50}>
               <div>
                  <Text fz="xl" fw={700} sx={{lineHeight: 1}}>
                     ${price}
                  </Text>
               </div>

               <Button className="button-color" radius="xl" style={{flex: 1}}>
                  <Link href={`/product/${id}`} className="link">
                     Details
                  </Link>
               </Button>
            </Group>
         </Card.Section>
      </Card>
   );
}