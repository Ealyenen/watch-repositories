import React from "react";
import { Typography } from "../../../shared/components/typography";
import { Star } from "../../../shared/components/star";
import { Flex } from "../../../shared/components/flex";
import { Link } from "../../../shared/components/link";
import { neutral } from "../../../theme/theme";
import { Link as RouterLink } from "react-router-dom";
import { REPOSITORIES_ROUTE } from "../../../router/routes";

interface Props {
  id: number | string
  name?: string
  owner?: string
  url?: string
  stars?: number
  lastCommitData?: string
}


const Repositories: React.FC<Props> = ({ id, name, owner, url, stars, lastCommitData }) => {

  return (
    <Flex
      justifyContent="space-between"
      gap={10}
      sx={{
        padding: "20px 0px",
        borderBottom: "1px solid",
        borderColor: neutral.contrast,
      }}
    >
      <div>
        <RouterLink to={`${REPOSITORIES_ROUTE}/${id}`} style={{ textDecoration: "none" }}>
          <Typography variant="subtitle" hoverColor={neutral.light} color={neutral.dark}>
            {name}
          </Typography>
        </RouterLink>
        <Typography sx={{ marginTop: "6px" }}>
          {owner}
        </Typography>
        {(stars || stars === 0) &&
          <Flex alignItems="center" gap={4} sx={{ marginTop: "4px" }}>
            <Star fontSize={20} stars={stars} /><Typography color={neutral.main} variant="hint">{stars}</Typography>
          </Flex>
        }
      </div>
      <Flex flexDirection="column" alignItems="end" gap={6}>
        <Link href={url} mode={"newWindow"}>
          {url}
        </Link>
        <Typography>
          {lastCommitData}
        </Typography>
      </Flex>
    </Flex>
  )
}

export default Repositories