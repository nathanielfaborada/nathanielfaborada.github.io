import React, { useRef, useEffect } from 'react';
import { FilterIcon } from '../common/Icons';
import { CATEGORY_FILTERS } from '../../data/projectsData';
import './ProjectFilter.css';

export default function ProjectFilter({
  selectedFilter = 'all',
  onSelectFilter,
  isOpen = false,
  onToggleDropdown,
  onCloseDropdown,
}) {
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);

  const activeFilterObj =
    CATEGORY_FILTERS.find((f) => f.key === selectedFilter) ||
    CATEGORY_FILTERS[0];
  const activeFilterLabel = activeFilterObj ? activeFilterObj.label : 'All';

  useEffect(() => {
    if (!isOpen) return undefined;

    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        if (onCloseDropdown) {
          onCloseDropdown();
        }
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        if (onCloseDropdown) {
          onCloseDropdown();
        }
        if (buttonRef.current) {
          buttonRef.current.focus();
        }
      }
    }

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onCloseDropdown]);

  return (
    <div className="filter-wrapper" ref={wrapperRef}>
      <button
        ref={buttonRef}
        type="button"
        className="filter-btn"
        id="filter-btn"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls="filter-dropdown"
        onClick={(e) => {
          e.stopPropagation();
          if (onToggleDropdown) onToggleDropdown();
        }}
      >
        <FilterIcon size={15} />
        <span>Filter: {activeFilterLabel}</span>
      </button>

      <div
        className={`filter-dropdown ${isOpen ? 'open' : ''}`.trim()}
        id="filter-dropdown"
        role="listbox"
        aria-label="Filter projects by category"
      >
        {CATEGORY_FILTERS.map((filter) => {
          const isSelected = selectedFilter === filter.key;
          return (
            <button
              key={filter.key}
              type="button"
              role="option"
              aria-selected={isSelected}
              className={`filter-option ${isSelected ? 'active' : ''}`.trim()}
              onClick={() => {
                if (onSelectFilter) onSelectFilter(filter.key);
                if (onCloseDropdown) onCloseDropdown();
              }}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
