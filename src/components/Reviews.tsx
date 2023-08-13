import {
   Avatar,
   Box,
   createStyles,
   Divider,
   Group,
   Paper,
   Rating,
   rem,
   Text,
   TypographyStylesProvider,
} from "@mantine/core";
import {IReview} from "@/utils/globalTypes";

const useStyles = createStyles((theme) => ({
   comment: {
      padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
   },

   body: {
      paddingLeft: rem(54),
      paddingTop: theme.spacing.sm,
      fontSize: theme.fontSizes.sm,
   },

   content: {
      '& > p:last-child': {
         marginBottom: 0,
      },
   },
}));

type ReviewsProp = IReview[] | undefined;

function Reviews({reviews}: { reviews: ReviewsProp }) {
   const {classes} = useStyles();

   return (
      <Box mt={15}>
         <Text><strong>Reviews:</strong></Text>
         {
            reviews && reviews.length ?
               reviews.map((review: IReview) => (
                  <Paper key={review.id} radius="md" className={classes.comment}>
                     <Group>
                        <Avatar alt={review.name}
                                radius="xl">{review.name.substring(0, 1)}</Avatar>
                        <div>
                           <Text fz="sm">{review.name}</Text>
                           <Rating size='xs' value={review.rating} fractions={2} readOnly/>
                        </div>
                     </Group>
                     <TypographyStylesProvider className={classes.body}>
                        <div className={classes.content} dangerouslySetInnerHTML={{__html: review.review}}/>
                     </TypographyStylesProvider>
                     <Divider my="sm"/>
                  </Paper>
               )) : ''
         }
      </Box>
   );
}

export default Reviews;