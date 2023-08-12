import {Card, Center, createStyles, rem, Text} from "@mantine/core";

import Image, {StaticImageData} from "next/image";

const useStyles = createStyles((theme) => ({
   card: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      cursor: 'pointer'
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

interface ICategoriesCardProps {
   item: {
      icon: StaticImageData;
      title: string;
   }
}

const CategoriesCard = ({item}: ICategoriesCardProps) => {
   const {classes} = useStyles();

   return (
      <Card withBorder radius="md" className={classes.card}>
         <Card.Section className={classes.imageSection}>
            <Image src={item.icon} alt="motherboard"/>
         </Card.Section>
         <Center>
            <Text fw={500}>{item.title}</Text>
         </Center>
      </Card>
   );
};

export default CategoriesCard;