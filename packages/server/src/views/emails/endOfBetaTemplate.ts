import config from '../../config';
import { EmailSubjectBody } from '../../models/EmailModel';

interface TemplateView {
	expireDays: number;
	startSubUrl: string;
}

export default function(view: TemplateView): EmailSubjectBody {
	return {
		subject: `Your ${config().appName} beta account will expire in ${view.expireDays} days`,
		body: `

Your ${config().appName} beta account will expire in ${view.expireDays} days.

To continue using it after this date, please start the subscription by following the link below.

From that page, select either monthly or yearly payments and click "Buy now".

${view.startSubUrl}

If you have any question please contact support at ${config().supportEmail}.

`.trim(),
	};
}
