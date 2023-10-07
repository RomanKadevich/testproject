import { useSearchUsersQuery } from "../store/github/github.api.ts";
export const HomePage = () => {
  const { } = useSearchUsersQuery('roma');
  return (
    <div>HomePage</div>
  )
}
