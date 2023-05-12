export class WidgetFilterService {

    private static instance: WidgetFilterService;

    public static getInstance(): WidgetFilterService {
        if (!WidgetFilterService.instance) {
            WidgetFilterService.instance = new WidgetFilterService();
        }

        return WidgetFilterService.instance;
    }

    public filterWidgets = async (category: string) => {
        this.resetClasses();
        if (category == "All") {
            return;
        }
        const widgetElements = document.querySelectorAll('[data-widgetcategory]');

        widgetElements.forEach((element) => {
            let elementCategory = element.getAttribute('data-widgetcategory');
            if (elementCategory != category) {
                element.classList.add('hidden');
            }
        });

    };

    private resetClasses = async () => {
        const widgetElements = document.querySelectorAll('[data-widgetcategory]');
        widgetElements.forEach((element) => {
            element.classList.remove('hidden');
        });
    };

}
