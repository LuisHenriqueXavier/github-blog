import { useParams } from "react-router-dom";
import { Container } from "./styles";

export function Post() {
  const { id } = useParams<{ id: string }>();

  return (
    <Container>
      <h1>Post {id}</h1>
      <p>Conteúdo do post ainda será implementado...</p>
    </Container>
  );
}
