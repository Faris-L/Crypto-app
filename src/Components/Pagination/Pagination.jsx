import { Pagination } from "@mantine/core";
import { PaginationWrapper } from "./pagination.styled";

const PaginationBar = ({ total, page, onChange, siblings = 1, boundaries = 1 }) => {
  return (
    <PaginationWrapper>
            <Pagination
        total={total}
        page={page}
        onChange={onChange}
        withControls
        siblings={1}
        boundaries={1}
        classNames={{
            root: "pg-root",
            control: "pg-control",
            dots: "pg-dots",
        }}
        />
    </PaginationWrapper>
  );
};

export default PaginationBar;