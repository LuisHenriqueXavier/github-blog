import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { PostCard } from "../../components/PostCard";
import { Container, ProfileCard, SearchForm, PostList } from "./styles";
import { Buildings, GithubLogo, Users } from "phosphor-react";

interface User {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  html_url: string;
  followers: number;
  company: string | null;
}

interface Post {
  id: number;
  title: string;
  body: string;
}

export function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const perPage = 6;

  useEffect(() => {
    api
      .get("/users/LuisHenriqueXavier")
      .then((response) => setUser(response.data));
  }, []);

  useEffect(() => {
    const trimmedSearch = searchTerm.trim();

    const query = trimmedSearch
      ? `repo:rocketseat-education/reactjs-github-blog-challenge ${trimmedSearch} in:title`
      : "repo:rocketseat-education/reactjs-github-blog-challenge";

    api
      .get("/search/issues", {
        params: {
          q: query,
          per_page: perPage,
          page,
        },
      })
      .then((response) => {
        setPosts(response.data.items);
        setTotalCount(response.data.total_count);
      })
      .catch(() => {
        setPosts([]);
        setTotalCount(0);
      });
  }, [searchTerm, page]);

  if (!user) return <p>Carregando perfil...</p>;

  const totalPages = Math.ceil(totalCount / perPage);

  return (
    <Container>
      <ProfileCard>
        <img src={user.avatar_url} alt="Avatar" />
        <div>
          <header>
            <h1>{user.name}</h1>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              GITHUB ↗
            </a>
          </header>
          <p>{user.bio}</p>
          <ul>
            <li>
              <GithubLogo size={18} weight="fill" />
              {user.login}
            </li>
            <li>
              <Buildings size={18} weight="fill" />
              {user.company || "Sem empresa"}
            </li>
            <li>
              <Users size={18} weight="fill" />
              {user.followers} seguidores
            </li>
          </ul>
        </div>
      </ProfileCard>

      <SearchForm>
        <header>
          <h2>Publicações</h2>
          <span>{totalCount} publicações</span>
        </header>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSearchTerm(inputValue);
              setPage(1);
            }
          }}
        />
      </SearchForm>

      <PostList>
        {posts.map((post) => (
          <PostCard key={post.id} title={post.title} body={post.body} />
        ))}
      </PostList>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Anterior
        </button>
        <span>
          Página {page} de {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => (p < totalPages ? p + 1 : p))}
          disabled={page === totalPages}
        >
          Próxima
        </button>
      </div>
    </Container>
  );
}
