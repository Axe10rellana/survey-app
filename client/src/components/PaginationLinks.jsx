//heroicons
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const PaginationLinks = ({ meta, onPageClick }) => {

  //functions
  function onClick(e, link) {
    e.preventDefault();
    if (!link.url) return;
    onPageClick(link);
  }

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          onClick={e => onClick(e, meta.links[0])}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          onClick={e => onClick(e, meta.links[meta.links.length - 1])}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{meta.from}</span> to <span className="font-medium">{meta.to}</span> of{' '}
            <span className="font-medium">{meta.total}</span> results
          </p>
        </div>
        <div>
         {meta.total > meta.per_page && (
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              {meta.links && meta.links.map((link, ind) => (
                <a
                  key={ind}
                  href="#"
                  onClick={e => onClick(e, link)}
                  aria-current="page"
                  className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${ind === 0 ? 'rounded-l-md' : ''} ${ind === meta.links.length - 1 ? 'rounded-r-md' : '' } ${link.active ? 'bg-indigo-600 text-white' : 'bg-white border-gray-300 text-gray-600'}`}
                  dangerouslySetInnerHTML={{ __html: link.label }}
                >
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </div>
  )
}

export default PaginationLinks;