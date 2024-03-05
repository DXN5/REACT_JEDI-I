import { FC } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import { FormStyle } from "../../utils/EditFormStyle";
import { PostQueryModel } from "../../models/PostModel";
import { useSnackbar } from "notistack";
import PostService from "../../services/PostService";
import PageHeader from "../../global_components/interface/PageHeader";

const initialStateForm: PostQueryModel = {
  title: "",
  body: "",
};

const PostCreate: FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { handleSubmit, control, reset } = useForm<PostQueryModel>({
    defaultValues: initialStateForm,
  });

  const onSubmit: SubmitHandler<PostQueryModel> = async (values) => {
    await PostService.createPost(values).then((res) => {
      if (res.status === 201) {
        reset(initialStateForm);
        enqueueSnackbar("Request completed successfully!");
      }
    });
  };

  return (
    <>
      <PageHeader url={"/posts"} name={"Create Posts"} />
      <Box sx={{ mt: 25 }}></Box>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={FormStyle.container}
      >
        <Typography sx={FormStyle.title}>Create form</Typography>
        <Box sx={FormStyle.inputContainer}>
          <Typography sx={FormStyle.inputTitle}>Title:</Typography>
          <Controller
            control={control}
            name="title"
            rules={{
              required: "Required field!",
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!error}
                helperText={error?.message}
                sx={FormStyle.input}
              />
            )}
          />
        </Box>
        <Box sx={FormStyle.inputContainer}>
          <Typography sx={FormStyle.inputTitle}>Text:</Typography>
          <Controller
            control={control}
            name="body"
            rules={{
              required: "Required field!",
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                multiline
                rows={3}
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!error}
                helperText={error?.message}
                sx={FormStyle.input}
              />
            )}
          />
        </Box>
        <Button type="submit" sx={FormStyle.button}>
          Submit
        </Button>
      </Box>
    </>
  );
};

export default PostCreate;
