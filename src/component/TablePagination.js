// import Pagination from "react-bootstrap/Pagination";

// const TablePagination = ({
//     currentPage,
//     totalPages,
//     onPageChange,
// }) => {
//     if (totalPages <= 1) return null;

//     return (
//         <div className="d-flex justify-content-end mt-2">
//             <Pagination className="mb-0">
//                 <Pagination.Prev
//                     onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
//                     disabled={currentPage === 1}
//                 />

//                 {Array.from({ length: totalPages }, (_, i) => {
//                     const page = i + 1;
//                     return (
//                         <Pagination.Item
//                             key={page}
//                             active={currentPage === page}
//                             onClick={() => onPageChange(page)}
//                         >
//                             {page}
//                         </Pagination.Item>
//                     );
//                 })}

//                 <Pagination.Next
//                     onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
//                     disabled={currentPage === totalPages}
//                 />
//             </Pagination>
//         </div>
//     );
// };

// export default TablePagination;


import Pagination from "react-bootstrap/Pagination";

const TablePagination = ({
    currentPage,
    totalPages,
    onPageChange,
    siblingCount = 1,
}) => {
    if (totalPages <= 1) return null;

    const pages = [];

    const startPage = Math.max(2, currentPage - siblingCount);
    const endPage = Math.min(totalPages - 1, currentPage + siblingCount);

    return (
        <div className="d-flex justify-content-end mt-2">
            <Pagination className="mb-0">
                <Pagination.First
                    onClick={() => onPageChange(1)}
                    disabled={currentPage === 1}
                />

                <Pagination.Prev
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                />

                {/* First page */}
                <Pagination.Item
                    active={currentPage === 1}
                    onClick={() => onPageChange(1)}
                >
                    1
                </Pagination.Item>

                {/* Left ellipsis */}
                {startPage > 2 && <Pagination.Ellipsis disabled />}

                {/* Middle pages */}
                {Array.from(
                    { length: endPage - startPage + 1 },
                    (_, i) => startPage + i
                ).map((page) => (
                    <Pagination.Item
                        key={page}
                        active={currentPage === page}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </Pagination.Item>
                ))}

                {/* Right ellipsis */}
                {endPage < totalPages - 1 && <Pagination.Ellipsis disabled />}

                {/* Last page */}
                {totalPages > 1 && (
                    <Pagination.Item
                        active={currentPage === totalPages}
                        onClick={() => onPageChange(totalPages)}
                    >
                        {totalPages}
                    </Pagination.Item>
                )}

                <Pagination.Next
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                />

                <Pagination.Last
                    onClick={() => onPageChange(totalPages)}
                    disabled={currentPage === totalPages}
                />
            </Pagination>
        </div>
    );
};

export default TablePagination;
