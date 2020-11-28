/*
 * nano-rpc-api
 * API specification for the [Nano Node RPC API](https://docs.nano.org/commands/rpc-protocol) 
 *
 * The version of the OpenAPI document: 19.0.0-alpha
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * AccountsPendingRequest
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2020-11-28T18:31:13.967+01:00[Europe/Oslo]")
public class AccountsPendingRequest {
  /**
   * Gets or Sets action
   */
  @JsonAdapter(ActionEnum.Adapter.class)
  public enum ActionEnum {
    ACCOUNTS_PENDING("accounts_pending");

    private String value;

    ActionEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static ActionEnum fromValue(String value) {
      for (ActionEnum b : ActionEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<ActionEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final ActionEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public ActionEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return ActionEnum.fromValue(value);
      }
    }
  }

  public static final String SERIALIZED_NAME_ACTION = "action";
  @SerializedName(SERIALIZED_NAME_ACTION)
  private ActionEnum action;

  public static final String SERIALIZED_NAME_ACCOUNTS = "accounts";
  @SerializedName(SERIALIZED_NAME_ACCOUNTS)
  private List<String> accounts = null;

  public static final String SERIALIZED_NAME_COUNT = "count";
  @SerializedName(SERIALIZED_NAME_COUNT)
  private String count;

  public static final String SERIALIZED_NAME_INCLUDE_ACTIVE = "include_active";
  @SerializedName(SERIALIZED_NAME_INCLUDE_ACTIVE)
  private Boolean includeActive;

  public static final String SERIALIZED_NAME_SOURCE = "source";
  @SerializedName(SERIALIZED_NAME_SOURCE)
  private Boolean source;


  public AccountsPendingRequest action(ActionEnum action) {
    
    this.action = action;
    return this;
  }

   /**
   * Get action
   * @return action
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public ActionEnum getAction() {
    return action;
  }


  public void setAction(ActionEnum action) {
    this.action = action;
  }


  public AccountsPendingRequest accounts(List<String> accounts) {
    
    this.accounts = accounts;
    return this;
  }

  public AccountsPendingRequest addAccountsItem(String accountsItem) {
    if (this.accounts == null) {
      this.accounts = new ArrayList<String>();
    }
    this.accounts.add(accountsItem);
    return this;
  }

   /**
   * Get accounts
   * @return accounts
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<String> getAccounts() {
    return accounts;
  }


  public void setAccounts(List<String> accounts) {
    this.accounts = accounts;
  }


  public AccountsPendingRequest count(String count) {
    
    this.count = count;
    return this;
  }

   /**
   * Get count
   * @return count
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1", value = "")

  public String getCount() {
    return count;
  }


  public void setCount(String count) {
    this.count = count;
  }


  public AccountsPendingRequest includeActive(Boolean includeActive) {
    
    this.includeActive = includeActive;
    return this;
  }

   /**
   * Get includeActive
   * @return includeActive
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getIncludeActive() {
    return includeActive;
  }


  public void setIncludeActive(Boolean includeActive) {
    this.includeActive = includeActive;
  }


  public AccountsPendingRequest source(Boolean source) {
    
    this.source = source;
    return this;
  }

   /**
   * Get source
   * @return source
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getSource() {
    return source;
  }


  public void setSource(Boolean source) {
    this.source = source;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AccountsPendingRequest accountsPendingRequest = (AccountsPendingRequest) o;
    return Objects.equals(this.action, accountsPendingRequest.action) &&
        Objects.equals(this.accounts, accountsPendingRequest.accounts) &&
        Objects.equals(this.count, accountsPendingRequest.count) &&
        Objects.equals(this.includeActive, accountsPendingRequest.includeActive) &&
        Objects.equals(this.source, accountsPendingRequest.source);
  }

  @Override
  public int hashCode() {
    return Objects.hash(action, accounts, count, includeActive, source);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AccountsPendingRequest {\n");
    sb.append("    action: ").append(toIndentedString(action)).append("\n");
    sb.append("    accounts: ").append(toIndentedString(accounts)).append("\n");
    sb.append("    count: ").append(toIndentedString(count)).append("\n");
    sb.append("    includeActive: ").append(toIndentedString(includeActive)).append("\n");
    sb.append("    source: ").append(toIndentedString(source)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

