import {Container, createStyles, rem, SimpleGrid, Title,} from '@mantine/core';
import {FeaturesCard} from "@/components/FeaturesCard";
import {IProduct} from "@/utils/globalTypes";


const useStyles = createStyles((theme) => ({
   title: {
      fontSize: rem(34),
      fontWeight: 900,

      [theme.fn.smallerThan('sm')]: {
         fontSize: rem(24),
      },
   },

   description: {
      maxWidth: 600,
      margin: 'auto',

      '&::after': {
         content: '""',
         display: 'block',
         backgroundColor: theme.fn.primaryColor(),
         width: rem(45),
         height: rem(2),
         marginTop: theme.spacing.sm,
         marginLeft: 'auto',
         marginRight: 'auto',
      },
   },

   card: {
      border: `${rem(1)} solid ${
         theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
   },

   cardTitle: {
      '&::after': {
         content: '""',
         display: 'block',
         backgroundColor: theme.fn.primaryColor(),
         width: rem(45),
         height: rem(2),
         marginTop: theme.spacing.sm,
      },
   },
}));

interface IProps {
   featuredProducts: IProduct[]
}

export function FeaturedSection({featuredProducts}: IProps) {
   const {classes} = useStyles();

   return (
      <Container size="lg" py='2.5rem'>

         <Title order={2} className={classes.title} ta="center" mt="sm">
            Featured Products
         </Title>
         <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{maxWidth: 'md', cols: 1}]}>
            {
               featuredProducts?.map((featured: IProduct) => (
                  <FeaturesCard
                     key={featured._id}
                     id={featured._id}
                     image={featured.image}
                     name={featured.name}
                     category={featured.category}
                     price={featured.price}
                     status={featured.status}
                     rating={featured.rating}
                  />
               ))
            }
         </SimpleGrid>
      </Container>
   );
}