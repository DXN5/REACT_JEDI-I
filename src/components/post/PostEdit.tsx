import { FC } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useSnackbar } from "notistack";
import { Box, Button, TextField, Typography } from "@mui/material";
import { FormStyle } from "../../utils/EditFormStyle";
import { useParams } from "react-router-dom";
import { PostQueryModel } from "../../models/PostModel";
import PostService from "../../services/PostService";
import { Switcher } from "../../utils/switcher";

const initialStateForm: PostQueryModel = {
  title: "",
  body: "",
};

interface Props {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>
}

const PostEdit: FC<Props> = ({ state, setState }) => {
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const { handleSubmit, control, reset } = useForm<PostQueryModel>({
    defaultValues: initialStateForm,
  });

  const onSubmit: SubmitHandler<PostQueryModel> = async (values) => {
    await PostService.changePost(id, values).then((res) => {
      if (res) {
        reset(initialStateForm);
        enqueueSnackbar("Request completed successfully!");
        setState(Switcher(state));
      }
    });
  };

  return (
    <Box
      sx={{ transform: state ? "scale(1)" : "scale(0)", transition: "0.3s" }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={FormStyle.container}
      >
        <Typography sx={FormStyle.title}>Edit form</Typography>
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
    </Box>
  );
};

export default PostEdit;
