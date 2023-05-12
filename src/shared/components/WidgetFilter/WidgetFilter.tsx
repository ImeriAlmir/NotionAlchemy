import React, { useContext, useState } from 'react';
import './WidgetFilter.scss';
import { widgetCategories } from '../../utilities/Utility';
import { WidgetFilterServiceContext } from '../../contexts/Contexts';

const WidgetFilter: React.FC = () => {

    const widgetFilterService = useContext(WidgetFilterServiceContext);

    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        widgetFilterService?.filterWidgets(category);
    };

    return (
        <div className="widget-filter">
            <div className="widget-filter-row center">
                {widgetCategories.map((category) => (
                    <button
                        key={category}
                        className={`widget-filter-button ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => handleCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <hr />
        </div >
    );
};

export default WidgetFilter;