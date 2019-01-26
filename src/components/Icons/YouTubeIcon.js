import React from 'react'
import PropTypes from 'prop-types'
import BEMHelper from 'react-bem-helper'
import './Icon.scss'

const bem = new BEMHelper('icon')

const YouTubeIcon = ({ className }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="28"
      viewBox="0 0 24 28"
      {...bem(null, null, className)}
    >
      <path d="M14.359 20.359v-2.453c0-0.516-0.156-0.781-0.453-0.781-0.172 0-0.344 0.078-0.516 0.25v3.5c0.172 0.172 0.344 0.25 0.516 0.25 0.297 0 0.453-0.25 0.453-0.766zM17.234 18.453h1.031v-0.531c0-0.531-0.172-0.797-0.516-0.797s-0.516 0.266-0.516 0.797v0.531zM8.313 14.297v1.094h-1.25v6.609h-1.156v-6.609h-1.219v-1.094h3.625zM11.453 16.266v5.734h-1.047v-0.625c-0.406 0.469-0.797 0.703-1.188 0.703-0.328 0-0.562-0.141-0.656-0.438-0.063-0.172-0.094-0.438-0.094-0.844v-4.531h1.031v4.219c0 0.234 0 0.375 0.016 0.406 0.016 0.156 0.094 0.234 0.234 0.234 0.219 0 0.422-0.156 0.656-0.484v-4.375h1.047zM15.391 18v2.281c0 0.516-0.031 0.906-0.109 1.141-0.125 0.438-0.406 0.656-0.828 0.656-0.359 0-0.719-0.219-1.062-0.641v0.562h-1.047v-7.703h1.047v2.516c0.328-0.406 0.688-0.625 1.062-0.625 0.422 0 0.703 0.219 0.828 0.656 0.078 0.234 0.109 0.609 0.109 1.156zM19.313 20.016v0.141c0 0.344-0.016 0.562-0.031 0.672-0.031 0.234-0.109 0.438-0.234 0.625-0.281 0.422-0.719 0.625-1.25 0.625-0.547 0-0.969-0.203-1.266-0.594-0.219-0.281-0.328-0.734-0.328-1.344v-2.016c0-0.609 0.094-1.047 0.313-1.344 0.297-0.391 0.719-0.594 1.25-0.594 0.516 0 0.938 0.203 1.219 0.594 0.219 0.297 0.328 0.734 0.328 1.344v1.188h-2.078v1.016c0 0.531 0.172 0.797 0.531 0.797 0.25 0 0.406-0.141 0.469-0.406 0-0.063 0.016-0.297 0.016-0.703h1.062zM12.266 7.141v2.438c0 0.531-0.172 0.797-0.5 0.797-0.344 0-0.5-0.266-0.5-0.797v-2.438c0-0.531 0.156-0.812 0.5-0.812 0.328 0 0.5 0.281 0.5 0.812zM20.594 18.281v0c0-1.344 0-2.766-0.297-4.062-0.219-0.922-0.969-1.594-1.859-1.687-2.125-0.234-4.281-0.234-6.438-0.234-2.141 0-4.297 0-6.422 0.234-0.906 0.094-1.656 0.766-1.859 1.687-0.297 1.297-0.313 2.719-0.313 4.062v0c0 1.328 0 2.75 0.313 4.062 0.203 0.906 0.953 1.578 1.844 1.687 2.141 0.234 4.297 0.234 6.438 0.234s4.297 0 6.438-0.234c0.891-0.109 1.641-0.781 1.844-1.687 0.313-1.313 0.313-2.734 0.313-4.062zM8.797 8.109l1.406-4.625h-1.172l-0.797 3.047-0.828-3.047h-1.219c0.234 0.719 0.5 1.437 0.734 2.156 0.375 1.094 0.609 1.906 0.719 2.469v3.141h1.156v-3.141zM13.312 9.375v-2.031c0-0.609-0.109-1.062-0.328-1.359-0.297-0.391-0.703-0.594-1.219-0.594-0.531 0-0.938 0.203-1.219 0.594-0.219 0.297-0.328 0.75-0.328 1.359v2.031c0 0.609 0.109 1.062 0.328 1.359 0.281 0.391 0.688 0.594 1.219 0.594 0.516 0 0.922-0.203 1.219-0.594 0.219-0.281 0.328-0.75 0.328-1.359zM16.141 11.25h1.047v-5.781h-1.047v4.422c-0.234 0.328-0.453 0.484-0.656 0.484-0.141 0-0.234-0.078-0.25-0.25-0.016-0.031-0.016-0.156-0.016-0.406v-4.25h-1.047v4.578c0 0.406 0.031 0.672 0.094 0.859 0.109 0.281 0.344 0.422 0.672 0.422 0.391 0 0.781-0.234 1.203-0.703v0.625zM24 6.5v15c0 2.484-2.016 4.5-4.5 4.5h-15c-2.484 0-4.5-2.016-4.5-4.5v-15c0-2.484 2.016-4.5 4.5-4.5h15c2.484 0 4.5 2.016 4.5 4.5z" />
    </svg>
  )
}

YouTubeIcon.propTypes = {
  className: PropTypes.string,
}

export default YouTubeIcon
