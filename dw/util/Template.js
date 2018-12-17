/**
 * Reads an ISML template from the file system and renders
 * it into a MimeEncodedText object. Optional substitution
 * values can be passed to the isml template via the
 * render(Map) method. Substitution parameters can be accessed
 * within the template through
 */
module.exports = class Template {
  /**
   * Creates a new template
   * @param {string} templateName
   * @param {string} [localeID]
   */
  constructor(templateName, localeID) {}

  /**
   * Renders the template specified at instantiation time,
   * without any substitution parameters
   * @param {Map} [params]
   * @returns {MimeEncodedText}
   */
  render(params) {}

  /**
   * Sets an optional localeID which is used instead of
   * the current requests localeID.
   * @param {string} localeID 
   * @returns {Template}
   */
  setLocale(localeID) {}
}
