import {Badge, Box, Container, Grid, Group, Image, List, rem, SimpleGrid, Text, useMantineTheme} from '@mantine/core';
import {IProduct} from "@/utils/globalTypes";
import {IconCategory, IconCircleCheck, IconListCheck, IconStars, IconTag} from '@tabler/icons-react';
import Reviews from "@/components/Reviews";

const PRIMARY_COL_HEIGHT = rem(500);

interface IProductDetailsProps {
   product: IProduct
}

export function ProductDetails({product}: IProductDetailsProps) {
   const theme = useMantineTheme();
   const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

   return (
      <Container my="md">
         <SimpleGrid cols={2} spacing="md" breakpoints={[{maxWidth: 'sm', cols: 1}]}>
            <Image src={product?.image} alt={product?.name}/>
            <Grid gutter="md">
               <Group position="apart" mt="md">
                  <div>
                     <Box mb={5}>
                        <Text fz="lg" fw={500}>
                           {product?.name}
                           <span>
                              <Badge ml={5} variant="outline" size='sm'
                                     color={`${product?.status === "In Stock" ? 'blue' : 'red'}`}>
                                 {product?.status}
                              </Badge>
                           </span>
                        </Text>
                     </Box>
                     <List
                        mt={20}
                        spacing="xs"
                        size="sm"
                        center
                     >
                        <List.Item m={5} icon={<IconCategory size="1rem"/>}>
                           <strong>Category:</strong> {product?.category}
                        </List.Item>
                        <List.Item m={5} icon={<IconTag size="1rem"/>}>
                           <strong>Price:</strong> ${product?.price}
                        </List.Item>
                        <List.Item m={5} icon={<IconStars size="1rem"/>}>
                           <strong>Rating:</strong> {product?.rating}
                        </List.Item>
                        <List.Item m={5} icon={<IconListCheck size="1rem"/>}>
                           <strong>Features:</strong>
                        </List.Item>
                        <List withPadding
                              mt={8}
                              spacing="xs"
                              size="sm"
                              center>
                           {Object.entries(product?.features)?.map(([key, value]) => (
                              <List.Item my={5} key={key} icon={<IconCircleCheck size="1rem"/>}>
                                 <strong style={{textTransform: 'capitalize'}}>{key}:</strong> {value}
                              </List.Item>
                           ))}
                        </List>
                     </List>
                  </div>
               </Group>
            </Grid>
         </SimpleGrid>
         {
            product?.description &&
             <Box my={5}>
                 <Text><strong>Description: </strong>{product?.description}</Text>
             </Box>
         }
         <Box my={2}>
            <Reviews reviews={product?.reviews}/>
         </Box>
      </Container>
   );
}