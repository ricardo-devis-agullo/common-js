import { IConfigService, ConfigServiceBase } from "./ConfigServiceBase";
import { ManualPollOptions } from "./ConfigCatClientOptions";
import { IConfigFetcher } from "./index";
import { ProjectConfig } from "./ProjectConfig";

export class ManualPollService extends ConfigServiceBase implements IConfigService {

    public constructor(configFetcher: IConfigFetcher, config: ManualPollOptions) {

        super(configFetcher, config);
    }

    async getConfig(): Promise<ProjectConfig | null> {

        this.baseConfig.logger.debug("ManualPollService.getConfig() called.");
        return await this.baseConfig.cache.get(this.baseConfig.getCacheKey());
    }

    async refreshConfigAsync(): Promise<ProjectConfig | null> {
        this.baseConfig.logger.debug("ManualPollService.refreshConfigAsync() called.");
        let p = await this.baseConfig.cache.get(this.baseConfig.getCacheKey());
        return this.refreshLogicBaseAsync(p)
    }
}