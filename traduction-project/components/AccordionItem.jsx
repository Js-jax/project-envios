import React from 'react';

class AccordionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleAccordion = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { title, content } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="w-90 max-w-1000 mx-auto">
        <div className="bg-white text-gray-700 my-8 p-4 rounded-md shadow-md">
          <div
            className={`p-2.5 h-3.5 flex items-center relative cursor-pointer transition-transform duration-200 transform ${
              isOpen ? 'scale-105' : ''
            }`}
            onClick={this.toggleAccordion}
          >
            <h4 className="flex-grow">{title}</h4>
            <span className="text-2xl font-bold absolute right-4">
              {isOpen ? '-' : '+'}
            </span>
          </div>
          <div
            className={`max-h-0 overflow-hidden transition-max-height ease-out bg-green-200 rounded-md ${
              isOpen ? 'max-h-full' : ''
            }`}
          >
            <div className="p-16 leading-6">
              {isOpen && (
                <>
                  <p className="text-lg font-normal">Principales responsabilidades:</p>
                  <br />
                  {content}
                </>
              )}
            </div>
          </div>
        </div>
        {/* ... otros elementos similares ... */}
      </div>
    );
  }
}

export default AccordionItem;
