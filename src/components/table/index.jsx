import React, { useEffect, useMemo, useRef, useState } from 'react';
//@import components
import Button from 'components/button';
import SVG from 'components/renderSvg';
import Select from 'components/select';
import Checkbox from 'components/checkbox';
import SearchBar from 'components/searchInput';
//@import media
import next from 'media/svgs/next.svg';
import prev from 'media/svgs/prev.svg';
import editIcon from 'media/svgs/edit.svg';
import deleteIcon from 'media/svgs/delete.svg';
import exportIcon from 'media/svgs/export-icon.svg';
import eyeIcon from 'media/svgs/eye-icon.svg';
//@import styles
import styles from './index.module.scss';
// @import libs
import { formatDate } from 'libs/formatDate';
import { useDispatch, useSelector } from 'react-redux';
import { handleClearTableRows } from 'store/slices/commonSlice';

const Pagination = ({ currentPage, totalPages, paginate }) => {
  const btnList = useMemo(() => {
    if (totalPages <= 1) return null;
    const buttons = [];
    const DOTS = '...';

    const generateRange = (start, end) =>
      Array.from({ length: end - start + 1 }, (_, i) => start + i);

    if (totalPages <= 5) {
      return generateRange(1, totalPages);
    }

    if (currentPage < 4) {
      buttons.push(...generateRange(1, 4), DOTS, totalPages);
    } else if (currentPage >= 4 && currentPage <= totalPages - 3) {
      buttons.push(
        1,
        DOTS,
        ...generateRange(currentPage - 1, currentPage + 1),
        DOTS,
        totalPages
      );
    } else {
      buttons.push(1, DOTS, ...generateRange(totalPages - 3, totalPages));
    }

    return buttons;
  }, [currentPage, totalPages]);

  if (totalPages <= 1) return null;
  return (
    <>
      {totalPages > 1 ? (
        <div className={`flex py-1`}>
          <button
            type='button'
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`mx-2 flex size-[32px] items-center justify-center border border-solid border-darkGray ${
              currentPage === 1
                ? 'cursor-not-allowed text-white opacity-[50%]'
                : 'bg-none brightness-0 saturate-100 '
            } rounded-[4px]`}
          >
            <SVG icon={prev} />
          </button>
          {btnList?.map((page, index) => {
            const key = index + 1;
            return (
              <button
                key={key}
                type='button'
                onClick={() => {
                  if (page !== '...') {
                    paginate(page);
                  }
                }}
                className={`mx-2 flex size-[32px]  ${page > 1000 ? 'w-[40px] ' : 'size-[32px]'} items-center justify-center overflow-hidden border border-solid text-[14px] font-[700] ${
                  currentPage === page
                    ? 'border-orange bg-orange text-white'
                    : 'border-[#DFE3E8]'
                } rounded-[4px]`}
              >
                {page}
              </button>
            );
          })}
          <button
            type='button'
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`mx-2 flex size-[32px] items-center justify-center border border-solid border-darkGray ${
              currentPage === totalPages
                ? 'cursor-not-allowed text-white opacity-[50%]'
                : 'bg-none brightness-0 saturate-100 '
            } rounded-[4px]`}
          >
            <SVG icon={next} />
          </button>
        </div>
      ) : null}
    </>
  );
};
const ActionCell = ({ row, col, onView, onDelete, onEdit }) => {
  const {
    showDelete = false,
    showEdit = false,
    showDetail = false,
    showDetailLabel,
  } = col;

  const disptach = useDispatch();

  const handleDelete = async id => {
    onDelete(id);
    disptach(handleClearTableRows(true));
  };

  return (
    <div className='flex gap-x-4'>
      {showDetail ? (
        <div
          className='flex cursor-pointer items-center'
          onClick={() => onView(row)}
          title='View item'
        >
          {showDetailLabel || <SVG icon={eyeIcon} width='19px' height='24px' />}
        </div>
      ) : null}

      {showEdit ? (
        <div
          className='flex cursor-pointer items-center'
          onClick={() => onEdit(row)}
          title='Edit item'
        >
          <SVG icon={editIcon} width='15px' height='20px' />
        </div>
      ) : null}

      {showDelete ? (
        <div
          className='flex cursor-pointer items-center'
          onClick={() => handleDelete(row.id)}
          title='Delete item'
        >
          <SVG icon={deleteIcon} width='15px' height='20px' />
        </div>
      ) : null}
    </div>
  );
};

const renderCellContent = ({
  col,
  row,
  rowIndex,
  onView,
  onDelete,
  onEdit,
}) => {
  if (col?.key === 'action') {
    return ActionCell({ row, col, onView, onDelete, onEdit });
  } else if (col?.type === 'date') {
    return formatDate(row[col?.dataIndex]);
  } else if (col?.onCreateCell) {
    return col.onCreateCell(row, rowIndex);
  } else {
    return row[col?.dataIndex];
  }
};

const Table = ({
  data,
  query,
  onView,
  onEdit,
  columns,
  onDelete,
  onBulkDelete,
  onSearch,
  onPaginate,
  onExport,
  handleOnSelectAll,
  tableWrapperClass = '',
  search = false,
  textCenter = false,
  isSelectAll = false,
  isExportBtn = false,
  isPagination = true,
  isBulkDeleteBtn = false,
  isSearchMobileNumber = false,
  searchPlaceholder = 'Search here',
}) => {
  const selectedPageRef = useRef();
  const currentPage = (query?.pageNumber || 0) + 1;
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchVal, setSearchVal] = useState('');
  const totalPages = Math.ceil(query?.count / query?.size) || 1;

  const disptach = useDispatch();

  const clearTableSelectedRows = useSelector(
    state => state.commonState?.clearTableSelectedRows
  );

  const paginate = pageNumber => {
    onPaginate({ pageNumber: pageNumber - 1 });
  };

  const handleSearchValue = e => {
    const value = e.target.value.trim();
    if (isSearchMobileNumber) {
      if (value.length <= 12) {
        setSearchVal(value);
      }
    } else {
      setSearchVal(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(searchVal?.trim());
  };

  const onResetSearch = () => {
    setSearchVal('');
    onSearch('');
  };

  const handleSelectAll = e => {
    if (e.target.checked) {
      const allRowIds = data.map(row => row.id);
      setSelectedRows(allRowIds);
      handleOnSelectAll && handleOnSelectAll(allRowIds);
    } else {
      setSelectedRows([]);
      handleOnSelectAll && handleOnSelectAll([]);
    }
  };

  const handleRowSelect = (rowId, isChecked) => {
    const updatedRows = isChecked
      ? [...selectedRows, rowId]
      : selectedRows.filter(id => id !== rowId);
    handleOnSelectAll && handleOnSelectAll(updatedRows);
    setSelectedRows(updatedRows);
  };

  useEffect(() => {
    if (clearTableSelectedRows) {
      setSelectedRows([]);
      disptach(handleClearTableRows(false));
    }
  }, [clearTableSelectedRows]);

  useEffect(() => {
    if (query?.pageNumber !== selectedPageRef?.current) {
      setSelectedRows([]);
      selectedPageRef.current = query?.pageNumber;
    }
  }, [query?.pageNumber]);

  return (
    <div className='w-full'>
      {search || isExportBtn || isBulkDeleteBtn ? (
        <div className='mb-4 flex flex-col justify-between md:flex-row'>
          <div className='mb-4 grow md:mb-0'>
            {search && (
              <SearchBar
                className='md:max-w-[400px]'
                value={searchVal}
                type='number'
                placeholder={searchPlaceholder}
                onChange={handleSearchValue}
                handleClear={onResetSearch}
                onSubmit={handleSubmit}
              />
            )}
          </div>

          <div className='flex flex-col gap-4 md:flex-row'>
            {isExportBtn && (
              <Button
                type='button'
                variant={'outline'}
                title='Export'
                disabled={data?.length < 1}
                icon={exportIcon}
                onClick={onExport}
                wrapperClass='max-w-[100px] !rounded-[6px] order-2 md:order-1'
              />
            )}

            {isBulkDeleteBtn ? (
              <Button
                onClick={() => onBulkDelete(selectedRows)}
                variant={'danger'}
                title='Bulk Delete'
                disabled={selectedRows?.length < 2}
                icon={deleteIcon}
                type='button'
                iconClass=' brightness-0 invert'
                wrapperClass='max-w-[140px] !rounded-[6px] order-1 md:order-2'
              />
            ) : null}
          </div>
        </div>
      ) : null}

      <div
        className={`size-full pb-[50px] ${styles.tableWrapper} ${tableWrapperClass}`}
      >
        <div className='mb-4 w-full overflow-x-auto'>
          <table className='w-full min-w-[1000px]  break-words bg-white '>
            <thead>
              <tr>
                {isSelectAll && data.length ? (
                  <th className='border-gray-200 w-[40px] border-b px-4 py-[10px]'>
                    <Checkbox
                      id='select-all'
                      labelClasses={'text-white before:!border-white'}
                      onChange={handleSelectAll}
                      checked={selectedRows.length === data.length}
                    />
                  </th>
                ) : null}
                {columns?.map(col => (
                  <th
                    key={col.key}
                    className={`border-gray-200 whitespace-nowrap border-b px-4 py-[10px] ${col.width || ''} ${col.key === 'action' ? 'w-[120px]' : ''}`}
                  >
                    {col?.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data && data.length ? (
                data?.map((row, rowIndex) => (
                  <tr key={row.id} className='bg-white'>
                    {isSelectAll && (
                      <td className='border border-grayMedium px-4 py-[10px]'>
                        <Checkbox
                          id={`row-${row.id}`}
                          checked={selectedRows.includes(row.id)}
                          onChange={e =>
                            handleRowSelect(row.id, e.target.checked)
                          }
                        />
                      </td>
                    )}
                    {columns?.map(col => (
                      <td
                        key={col?.key}
                        className={`border border-grayMedium px-4 py-[10px] text-[14px] font-normal text-dark ${
                          textCenter ? 'text-center' : 'text-start'
                        }`}
                      >
                        {renderCellContent({
                          col,
                          row,
                          rowIndex,
                          onView,
                          onDelete,
                          onEdit,
                        })}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns?.length}>
                    <span className='text-md flex items-center justify-center py-2 text-center font-medium'>
                      No Data Found.
                    </span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {isPagination ? (
          <div className='flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:gap-0'>
            <div>
              <Pagination
                className='mb-[5px]'
                paginate={paginate}
                totalPages={totalPages}
                currentPage={currentPage}
              />
            </div>
            {query?.count > 10 ? (
              <Select
                label={'Per page'}
                value={query?.size}
                labelClasses='!mb-0'
                className='flex items-center gap-3'
                selectClasses={'w-24 h-[40px] rounded-[6px] py-[4px] '}
                options={[
                  { label: '10', value: 10 },
                  { label: '20', value: 20 },
                  { label: '30', value: 30 },
                ]}
                onChange={value => {
                  onPaginate({ ...query, pageNumber: 0, size: value });
                }}
              />
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Table;
