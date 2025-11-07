import styled from "styled-components";

export const PaginationWrapper = styled.div`
  border-top: 1px solid #eef2f7;
  padding: 22px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .pg-root {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pg-root .mantine-Group-root {
   --group-wrap: nowrap !important;
    display: flex;
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }


  .pg-root .mantine-Group-root > * {
    flex-shrink: 0;
  }

  .pg-control {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid #e5e7eb;
    background: #fff;
    color: #111827;
    font-weight: 600;
    transition: background-color .15s, color .15s, border-color .15s;
    display: flex; align-items: center; justify-content: center; line-height: 1;
    box-shadow: 0 1px 2px rgba(0,0,0,.04);
  }
  .pg-control:hover { background:#f9fafb; border-color:#d1d5db; }
  .pg-control[data-active] { background:#2563eb; color:#fff; border-color:#2563eb; }
  .pg-control[data-active]:hover { background:#1d4ed8; border-color:#1d4ed8; }
  .pg-control[data-disabled] { opacity:.5; cursor:not-allowed; background:#f3f4f6; }

  .pg-dots {
    width:36px; height:36px; border-radius:8px;
    display:flex; align-items:center; justify-content:center;
    line-height:1; color:#6b7280; background:transparent;
  }

  @media (max-width: 520px) {
    .pg-control, .pg-dots { width:30px; height:30px; }
    .pg-root .mantine-Group-root { gap:6px; }
  }
`;
