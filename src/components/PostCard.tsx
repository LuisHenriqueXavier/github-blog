import styled from "styled-components";

interface PostCardProps {
  title: string;
  body: string;
}

export function PostCard({ title, body }: PostCardProps) {
  return (
    <Card>
      <h2>{title}</h2>
      <p>{body}</p>
    </Card>
  );
}

const Card = styled.article`
  background: ${(props) => props.theme.basePost};
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: 0.2s;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: ${(props) => props.theme.baseLabel};
  }

  h2 {
    font-size: 1.25rem;
    color: ${(props) => props.theme.baseTitle};
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme.baseText};
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
